import React, { useState, useCallback } from "react";

import BggSearchInput from "./BggSearchInput.jsx";

export default {
  title: "BggSearchInput",
  component: BggSearchInput,
  argTypes: {
    isGetFullGameData: { control: "boolean" },
  },
};

const Template = ({ isGetFullGameData, ...args }) => {
  const [selectGame, setSelectGame] = useState();

  const handleSelectChanged = useCallback(
    async (res) => {
      if (isGetFullGameData) {
        // res is promise
        setSelectGame("Loading Full Data...");
        const data = await res;

        setSelectGame(data);
      } else {
        // res is data object
        setSelectGame(res);
      }
    },
    [isGetFullGameData]
  );

  return (
    <>
      <BggSearchInput
        {...args}
        isGetFullGameData={isGetFullGameData}
        onChangeSelect={handleSelectChanged}
      />

      {selectGame && (
        <>
          {isGetFullGameData ? (
            <h3>
              When isGetFullGameData equal to true, onChangeSelect callback will
              get a Promise
            </h3>
          ) : (
            <h3>onChangeSelect callback:</h3>
          )}

          <code style={{ whiteSpace: "pre-wrap" }}>
            {JSON.stringify(selectGame, null, "  ")}
          </code>
        </>
      )}
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = { isGetFullGameData: true };
