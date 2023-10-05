import React from "react";
import { UserConsumer } from "./UserContext";
import { ChannelConsumer } from "./ChannelContext";

const ComponantB = () => {
  return (
    <UserConsumer>
    {
      username => {
        return (
          <ChannelConsumer>
            {
              channel => {
                return <div>Hello {username} from {channel}</div>;
              }
            }
          </ChannelConsumer>
        )
      }
    }
    </UserConsumer>
  );
};

export default ComponantB;
