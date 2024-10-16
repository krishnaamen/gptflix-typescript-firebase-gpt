import GptMovieSuggestion from "./GptMovieSuggestion"
import GptSearchBar from "./GptSearchBar"
const GptSearch = () => {
    return (
        <div className=" z-10 p-2">
            <GptSearchBar />
            <GptMovieSuggestion />

        </div>
    )
}

export default GptSearch