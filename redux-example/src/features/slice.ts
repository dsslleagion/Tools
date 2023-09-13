import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "./store";

export interface StateProps {
    a: number;
    b: number;
}

const exemploSlice = createSlice({
    name: "exemplo", //o name é obrigatório
    initialState: {
        a: 0,
        b: 0
    } as StateProps,
    reducers: {
        setA: (state, action: PayloadAction<number>) => {
            state.a = state.a + action.payload;
        },
        setB: (state, action: PayloadAction<number>) => {
            state.b = state.b + action.payload;
            incA(); // não funciona
        },
        incA: (state) => {
            console.log("incA");
            state.a += 1;
        }
    }
});

export const set =
    (nro: number): AppThunk<void> =>
        async (dispatch, getState) => {
            dispatch(setB(nro));
            dispatch(incA());
        };

// exporta as actions
export const { setA, setB, incA } = exemploSlice.actions;

// exporta o reducer
export default exemploSlice.reducer;
