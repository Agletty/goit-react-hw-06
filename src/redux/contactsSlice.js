import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsInitialState = [
  { id: "1111", name: "Rosie Simpson", number: "459-12-56" },
  { id: "222", name: "Hermione Kline", number: "443-89-12" },
  { id: "333", name: "Eden Clements", number: "645-17-79" },
  { id: "444", name: "Annie Copeland", number: "227-91-26" },
];

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: contactsInitialState,
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(contact) {
        return {
          payload: {
            id: nanoid(),
            name: contact.name,
            number: contact.number,
          },
        };
      },
    },

    deleteContact: (state, action) => {
      return {
        ...state,
        items: state.items.filter((contact) => contact.id !== action.payload),
      };
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
