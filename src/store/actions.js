export const ActionType = {
  ADD_COMMENT: `ADD_COMMENT`
};

export const changeDate = (comment) => ({
  type: ActionType.ADD_COMMENT,
  payload: (comment),
});
