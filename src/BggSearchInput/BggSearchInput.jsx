import React, { useRef, useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import _debounce from "lodash/debounce";
import _throttle from "lodash/throttle";
import AsyncSelect from "react-select/async";

import bggXmlApiClient from "bgg-xml-api-client";

import sty from "./BggSearchInput.module.scss";

const BggSearchInput = ({
  isGetFullGameData = false,
  onChangeInput,
  onChangeSelect = (val) => {
    console.log(`select: ${val} (you should pass onChange prop)`);
  },
  placeholder = "Search by BGG...",
  ...restProps
}) => {
  const getBggList = useCallback(async (name, cb) => {
    try {
      const { data } = await bggXmlApiClient.get("search", {
        query: name,
        type: "boardgame",
      });

      // console.log(data);
      const { item, total } = data;

      if (total === "0") return;

      const items = total === "1" ? [item] : item;

      const res = items.map(({ id, name: { value: name }, yearpublished }) => {
        const year = yearpublished?.value;
        return {
          label: `${name}${year ? " (" + year + ")" : ""}`,
          name,
          id,
          value: id,
          year: year,
        };
      });
      return res;
    } catch (error) {
      console.log(error);
      return;
    }
  }, []);

  const getBggGameData = useCallback(async (id) => {
    try {
      const { data } = await bggXmlApiClient.get("thing", {
        id,
        type: "boardgame",
      });
      return data?.item;
    } catch (error) {
      console.log(error);
      return;
    }
  }, []);

  const throttleBggRequest = useCallback(
    _throttle(async (type, val, cb) => {
      const switchMap = {
        list: getBggList,
        game: getBggGameData,
      };

      const data = await switchMap[type](val);
      cb && cb(data);
    }, 5500),
    []
  );

  const debounceGetList = useCallback(
    _debounce((val, callback) => {
      throttleBggRequest("list", val, callback);
    }, 1000),
    []
  );

  const getGameData = useCallback((id) => {
    return new Promise((resolve) => {
      throttleBggRequest("game", id, resolve);
    });
  }, []);

  const loadOptions = useCallback((val, callback) => {
    debounceGetList(val, callback);
  }, []);

  const handleSelectChange = useCallback(
    async (option) => {
      if (isGetFullGameData) {
        onChangeSelect(getGameData(option.id));
      } else {
        onChangeSelect(option);
      }
    },
    [isGetFullGameData]
  );

  return (
    <AsyncSelect
      className={sty.BggSearchInput}
      cacheOptions
      loadOptions={loadOptions}
      defaultOptions
      onInputChange={onChangeInput}
      onChange={handleSelectChange}
      placeholder={placeholder}
      {...restProps}
    ></AsyncSelect>
  );
};

BggSearchInput.propTypes = {
  placeholder: PropTypes.string, //test
  onChangeInput: PropTypes.func,
  onChangeSelect: PropTypes.func,
  isGetFullGameData: PropTypes.bool,
};

export default BggSearchInput;
