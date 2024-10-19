import { expect, test, describe } from "vitest";
import Header from "../src/components/Header";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

// Create a mock Redux store
const mockStore = configureStore([]);

describe("Header Component Tests", () => {
    test("Header renders correctly with the Logout button", () => {
        const initialState = {
            user: {
                uid: "123",
                email: "test@example.com",
                displayName: "Test User",
                photoURL: "test-photo-url"
            },
            gpt: {
                showGptSearchView: false // GPT search view is not shown in this test
            }
        };
        const store = mockStore(initialState);

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Header />
                </MemoryRouter>
            </Provider>
        );

        // Check if the Logout button is rendered
        const logOutButton = screen.getByText("Logout");
        expect(logOutButton).toBeInTheDocument();

        // Check if the logo is rendered
        const logo = screen.getByAltText("logo");
        expect(logo).toBeInTheDocument();

        // Check if the GPT search button is rendered
        const searchButton = screen.getByText("GptSearch");
        expect(searchButton).toBeInTheDocument();
    });

    test("Header renders language options when gptSearchView is true", () => {
        const initialState = {
            user: {
                uid: "123",
                email: "test@example.com",
                displayName: "Test User",
                photoURL: "test-photo-url"
            },
            gpt: {
                showGptSearchView: true // Set to true to render the language options
            }
        };
        const store = mockStore(initialState);

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Header />
                </MemoryRouter>
            </Provider>
        );

        // Check if the language select element is rendered
        const languageSelect = screen.getByRole("combobox"); // Finds the <select> element
        expect(languageSelect).toBeInTheDocument();

        // Verify if the options are rendered
        const options = screen.getAllByRole("option");
        expect(options.length).toBeGreaterThan(0);
        expect(options.length).toBe(15);





    });

});
