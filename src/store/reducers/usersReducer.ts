import { UsersAction, UsersActionType, UserState } from '../../types/user';

const initialState: Map<string, UserState> = new Map<string, UserState>();

export const usersReducer = (
  state = initialState,
  action: UsersAction
): Map<string, UserState> => {
  switch (action.type) {
    case UsersActionType.ADD_USER: {
      if(action.payload.id !== undefined) {
        initialState.set(action.payload.id, action.payload);
      }
      return initialState;
    }
    default:
      return state;
  }
}