import React from "react";

import BggSearchInput from "./BggSearchInput.jsx";

export default {
  title: "BggSearchInput",
  component: BggSearchInput,
  argTypes: {
    // backgroundColor: { control: "color" },
  },
};

const Template = (args) => <BggSearchInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
