import React from "react";
import styled from "styled-components";
import {FaApple} from "react-icons/fa";
import {FcGoogle} from "react-icons/fc";
import {THEME} from "./../../styles/theme";
const StyledGoogleAppleBtn = styled.div`
  .or {
    text-align: center;
    margin-top: 13px;
    color: ${THEME.colors.gray600};
    font-size: 13px;
  }
  .btn {
    margin-top: 13px;
    padding-left: calc(1.5 * 0.5);
    padding-right: calc(1.5 * 0.5);
    padding: 13px 9px;
    border-radius: 13px;
    border: 1px solid ${THEME.colors.borderColor};
    cursor: pointer;
    &:hover{
        background-color: ${THEME.colors.hoverColor};
    }
    button {
      font-size: 13px;
      font-weight: 600;
      color: ${THEME.colors.dark};
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 6px;
      border: none;
      outline: none;
      background-color: transparent;
    }
  }
`;

export const Google_apple_btn = () => {
  return (
    <StyledGoogleAppleBtn>
      <div className="or">OR</div>
      <div className="apple_btn btn transition">
        <button>
          <FaApple size={18} />
          <span>Sign in with Apple</span>
        </button>
      </div>
      <div className="google_btn btn transition">
        <button>
          <FcGoogle size={18} />
          <span>Sign in with Google</span>
        </button>
      </div>
    </StyledGoogleAppleBtn>
  );
};
