// @ts- ignore
import React from "react";
import { createPortal } from "react-dom";
import modalConfig from "./modalConfig.js";

const ModalManager = (type: string) => {
  const modalRoot: any = document.getElementById("modal-root");
  const CurrentModal = modalConfig[type];
  return createPortal(<CurrentModal />, modalRoot);
};

export default ModalManager;
