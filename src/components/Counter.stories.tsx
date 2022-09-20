import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Provider } from "react-redux";
import store from "../store/store";
import Counter from "./Counter";

export default {
  title: "Counter",
  component: Counter,
  decorators: [
    (story) => (
      <>
        <span data-begin-source />
        {story()}
        <span data-end-source />
      </>
    ),
    (story) => (
      <Provider store={store}>
        <div style={{ padding: "1rem" }}>{story()}</div>
      </Provider>
    ),
  ],
  parameters: {
    docs: {
      transformSource: (source: string) => {
        const [, output] =
          source.match(
            /<span data-begin-source \/>([\s\S]*?)<span data-end-source \/>/
          ) ?? [];
        return output;
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
