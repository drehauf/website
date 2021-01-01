import React, { FC as Component } from 'react';

interface Props {
  index: number;
  id: string;
  name: string;
  description: string;
  onActionClick: (index: number) => void;
  onActionHover: (description: string | undefined) => void;
  isCollapsed: boolean;
}

const SidebarAction: Component<Props> = ({
  index, id, name, description, onActionClick, onActionHover, isCollapsed,
}: Props) => (
  <div
    className="sidebar_action"
    // collapsed={isCollapsed}
    role="button"
    tabIndex={0}
    onKeyDown={() => onActionClick(index)}
    onClick={() => onActionClick(index)}
    onMouseEnter={() => onActionHover(description)}
    onMouseLeave={() => onActionHover(undefined)}
  >
    <input type="radio" name="sidebar_actions" id={id} />
    <label className="sidebar_action_wrapper" htmlFor={id}>
      <p className="sidebar_action_wrapper_name">{name}</p>
      {/* <p className='sidebar_action_description'>{description}</p> */}
    </label>
    {/*
        <div className='tooltip'>
          <p>{description}</p>
        </div>
      */}
  </div>
);

export default SidebarAction;
