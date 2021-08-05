import React from "react";

export type ShellProps = { b: 2 };

export const Shell = (props: ShellProps) => {
  return <div>Just a shell {JSON.stringify(props)}</div>;
};
