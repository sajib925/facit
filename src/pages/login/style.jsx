import styled from "styled-components";
import {THEME} from "./../../styles/theme";
import { media } from './../../styles/responsive';

export const StyledLogin = styled.div`
  background-color: ${THEME.colors.brand};
  min-height: 100vh;
  .wrapper {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
  }
  .card_row {
    display: flex;
    justify-content: center;
  }
  .card_container {
    margin: 0 10px;
    width: 33.33333333%;
    ${media.down("lg")} {
      width: 60%;
    }
    ${media.down("md")} {
      width: 50%;
    }
    ${media.down("sm")} {
      width: 100%;
    }
    .card {
      background-color: ${THEME.colors.white};
      padding: 19px;
      border-radius: 32px;
      .logo {
        margin: 39px 0;
        img {
          margin: 0 auto;
        }
      }

      .auth_btn {
        border-radius: 20px;
        padding: 0 13px 13px;
        background-color: #e9e9ea;
        width: 100%;
        display: flex;
        .btn_col {
          margin-top: 13px;
          flex: 0 0 auto;
          width: 50%;
          max-width: 100%;
          padding-left: calc(16px * 0.5);
          padding-right: calc(16px * 0.5);

          a {
            display: flex;
            justify-content: center;
            text-decoration: none;

            .login_up_btn {
              background-color: #1f2128;
              color: #fff;
              &:hover {
                background-color: ${THEME.colors.activeBg};
              }
            }
            .sign_up_btn {
              &:hover {
                background-color: #1f2128;
                color: #fff;
              }
            }
          }
          button {
            cursor: pointer;
            padding: 8px 16px;
            border-radius: 14px;
            width: 100%;
            background-color: transparent;
            border: none;
            outline: none;
            font-size: 16px;
            font-weight: 600;
            line-height: 24px;
          }
        }
      }
      .h1 {
        font-size: 32px;
        margin: 39px 0 6px;
        text-align: center;
        color: ${THEME.colors.brandTwo};
        ${media.down("md")} {
          font-size: 27px;
        }
        ${media.down("sm")} {
          font-size: 22px;
        }
      }
      .h4 {
        font-weight: 500;
        font-size: 19px;
        color: rgba(109, 118, 126, 0.75);
        text-align: center;
        margin-bottom: 39px;
      }
    }
    /* login from control style */
    form {
      .from_floating {
        position: relative;
        .from_control {
          padding: 1rem;
          height: calc(3.5rem + 2px);
          line-height: 1.25;
          appearance: none;
          background-clip: padding-box;
          background-color: #f8f9fa;
          border: 1px solid #f8f9fa;
          border-radius: 1rem;
          box-shadow: inset 0 1px 2px rgb(0 0 0 / 8%);
          color: #323232;
          display: block;
          font-size: 1rem;
          font-weight: 600;
          line-height: 1.5;
          padding: 0.5rem 1rem;
          transition: border-color 0.15s ease-in-out,
            box-shadow 0.15s ease-in-out;
          width: 100%;
          &:focus {
            background-color: #f8f9fa;
            border-color: #b6aee9;
            box-shadow: inset 0 1px 2px rgb(0 0 0 / 8%),
              0 0 0 0.25rem rgb(108 93 211 / 25%);
            color: #323232;
            outline: 0;
          }
          &:focus ~ label {
            opacity: 0.65;
            top: -13px;
            /* transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem); */
          }
        }
        label {
          color: ${THEME.colors.gray};
          border: 1px solid transparent;
          height: 100%;
          left: 0;
          overflow: hidden;
          padding: 1rem;
          pointer-events: none;
          position: absolute;
          text-overflow: ellipsis;
          top: 0;
          transform-origin: 0 0;
          transition: opacity 0.1s ease-in-out;
          white-space: nowrap;
          width: 100%;
        }
      }
      .login_btn {
        margin-top: 20px;
        max-width: 100%;
        padding-left: calc(20px * 0.5);
        padding-right: calc(20px * 0.5);
        button {
          width: 100%;
          border: 1px solid ${THEME.colors.warning};
          background-color: ${THEME.colors.warning};
          color: ${THEME.colors.dark};
          padding: 13px;
          border-radius: 13px;
          font-size: 13px;
          font-weight: 600;
          line-height: 20px;
          cursor: pointer;
          transition: ease-in-out background-color 0.15s;
          &:hover {
            background-color: ${THEME.colors.LHover};
            border: 1px solid ${THEME.colors.LHoverBorder};
          }
        }
      }
    }
  }
  .policy_link {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 16px;
    a {
      color: ${THEME.colors.dark};
      text-decoration: none;
      font-size: 13px;
      margin-top: 48px;
    }
  }
`;
