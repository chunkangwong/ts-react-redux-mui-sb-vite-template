import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Provider } from "react-redux";
import store from "../store/store";
import Counter from "./Counter";

export default {
  title: "Counter",
  component: Counter,
  decorators: [
    (story) => (
      <Provider store={store}>
        <div style={{ padding: "1rem" }}>
          <br story-start />
          {story()}
          <br story-end />
        </div>
      </Provider>
    ),
  ],
  parameters: {
    docs: {
      transformSource: (source: string) => {
        const regexRes = source.match(
          /<br story-start \/>([\s\S]*?)<br story-end \/>/
        );
        return regexRes ? regexRes[1] : source;
      },
    },
  },
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = (args) => (
  <Counter {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Button",
};
