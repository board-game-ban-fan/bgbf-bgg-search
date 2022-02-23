import React, { useRef, useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import _debounce from "lodash/debounce";
import _throttle from "lodash/throttle";
import AsyncSelect from "react-select/async";

import bggXmlApiClient from "bgg-xml-api-client";

import sty from "./BggSearchInput.module.scss";

const BggSearchInput = ({
  onChangeInput,
  onChangeSelect = (val) => {
    console.log(`select: ${val} (you should pass onChange prop)`);
  },
  placeholder = "Search by BGG...",
  ...restProps
}) => {
  const getBggGame = useCallback(async (name) => {
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
        value: id,
        year: year,
      };
    });

    return res;
  }, []);

  const throttleRequest = useCallback(
    _throttle(async (val, callback) => {
      if (val) {
        const data = await getBggGame(val);
        callback(data);
      } else {
        callback([]);
      }
    }, 5100),
    []
  );

  const debounceGet = useCallback(
    _debounce((val, callback) => {
      throttleRequest(val, callback);
    }, 1500),
    []
  );

  const loadOptions = useCallback((val, callback) => {
    debounceGet(val, callback);
  }, []);

  return (
    <AsyncSelect
      className={sty.BggSearchInput}
      cacheOptions
      loadOptions={loadOptions}
      defaultOptions
      onInputChange={onChangeInput}
      onChange={onChangeSelect}
      placeholder={placeholder}
      {...restProps}
    ></AsyncSelect>
  );
};

BggSearchInput.propTypes = {
  placeholder: PropTypes.string,
  onChangeInput: PropTypes.func,
  onChangeSelect: PropTypes.func,
};

export default BggSearchInput;
