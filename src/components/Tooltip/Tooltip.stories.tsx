import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";
import { LegacyRef, forwardRef } from "react";

const TestElement = forwardRef(
  (
    {
      onMouseEnter,
      onMouseLeave,
    }: { onMouseEnter: () => void; onMouseLeave: () => void },
    ref?: LegacyRef<HTMLDivElement>,
  ) => {
    return (
      <div
        ref={ref}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{
          width: "200px",
          height: "100px",
          backgroundColor: "pink",
        }}
      >
        testElement
      </div>
    );
  },
);

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: "select",
      options: [
        "left-start",
        "left-center",
        "left-right",
        "top-start",
        "top-center",
        "top-end",
        "right-start",
        "right-center",
        "right-end",
        "bottom-start",
        "bottom-center",
        "bottom-end",
      ],
    },
  },
  args: {
    tooltipContent: "Tooltip text",
    position: "top-start",
    renderElementToWrap: (elementRef, onMouseEnter, onMouseLeave) => {
      return (
        <TestElement
          ref={elementRef}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        />
      );
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
