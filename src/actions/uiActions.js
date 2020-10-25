import { types } from "../types/types";

export const uiModelOpen = () => ({
    type: types.uiOpenModal
})

export const uiModalClose = () => ({
    type: types.uiCloseModal
})
