import React, { FC as Component, PropsWithChildren } from 'react';

const TextBlock: Component<PropsWithChildren<any>> = ({ children }: PropsWithChildren<any>) => <div className="text-block">{children}</div>;

export default TextBlock;
