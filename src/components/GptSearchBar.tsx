import { useDispatch, useSelector } from "react-redux"
import lang from "../utils/langconstant"
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constant";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {

    const dispatch = useDispatch();


    const searchMovieTMDB = async (movie: string) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        return json.results;
    }









    type LangKeys = keyof typeof lang;
    const searchText = useRef<HTMLInputElement>(null)

    const search = useSelector((store: { config: { lang: LangKeys } }) => store.config.lang);
    const handleGptSearchCLick = async () => {
        console.log(searchText.current?.value);
        const texttosend = `Act as a movie recomandation system and search for the query ${searchText.current?.value} and only give me the title of the 5 movies that are comma seperatd eg: partner,terenam,don,etc`;

        const gptResponse = await openai.chat.completions.create({
            messages: [{ role: 'user', content: texttosend }],
            model: 'gpt-3.5-turbo',
        });
        console.log(gptResponse.choices[0].message.content);
        const getMovies = gptResponse?.choices[0]?.message?.content?.split(',');

        const data = getMovies?.map(async (movie: string) => {
            return await searchMovieTMDB(movie);
        });
        const tmdbData = data ? await Promise.all(data) : [];
        console.log("************ TMDB DATA   ***********'", tmdbData);
        dispatch(addGptMovieResults({ gptMovieResults: tmdbData, searchMovies: getMovies }));



    }

    return (
        <div className='pt-[10%] flex justify-center'>
            <form className=' w-screen md:w-1/2 grid grid-cols-12 gap-2' onSubmit={(e) => e.preventDefault()}>
                <input type="text" ref={searchText} placeholder={lang[search].placeHolder} className="bg-gray-800 text-white p-2 rounded-lg col-span-9" />
                <button type="submit" className="bg-blue-500 p-2 rounded-lg col-span-3" onClick={handleGptSearchCLick}>{lang[search].search}</button>
            </form>

        </div>

    )
}

export default GptSearchBar