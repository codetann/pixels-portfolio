import React, { useRef } from "react";
import { Transition } from "react-transition-group";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 20rem;
  background: white;
  box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
  display: flex;
`;

const duration = 100;
const defaultStyle = {
  transition: `all ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 0, transform: "translateY(-100%)" },
  entered: { opacity: 1, transform: "translateY(0)" },
  exiting: { opacity: 0, transform: "translateY(-100%)" },
  exited: { opacity: 0, transform: "translateY(-100%)" },
};

function NavMenu({ children, show }) {
  const nodeRef = useRef(null);
  return (
    <Transition in={show} timeout={duration} nodeRef={nodeRef} unmountOnExit>
      {(state) => (
        <Wrapper
          show={show}
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
          ref={nodeRef}
        >
          {children}
        </Wrapper>
      )}
    </Transition>
  );
}

export { NavMenu };
