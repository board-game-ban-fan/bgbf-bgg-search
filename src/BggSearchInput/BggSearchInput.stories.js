import React, { useState } from "react";

import BggSearchInput from "./BggSearchInput.jsx";

export default {
  title: "BggSearchInput",
  component: BggSearchInput,
  argTypes: {
    // backgroundColor: { control: "color" },
  },
};

const Template = (args) => {
  const [selectGame, setSelectGame] = useState();
  return (
    <>
      <BggSearchInput {...args} onChangeSelect={setSelectGame} />
      {selectGame && (
        <>
          <h3>onChangeSelect callback:</h3>
          <code style={{ whiteSpace: "pre-wrap" }}>
            {JSON.stringify(selectGame, null, "  ")}
          </code>
        </>
      )}
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
