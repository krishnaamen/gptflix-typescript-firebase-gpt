import { useSelector } from "react-redux"
import lang from "../utils/langconstant"
const GptSearchBar = () => {
type LangKeys = keyof typeof lang;

    const search = useSelector((store: { config: { lang: LangKeys } }) => store.config.lang);
    
    return (
        <div className='pt-[10%] flex justify-center'>
            <form className='w-1/2 grid grid-cols-12 gap-2'>
                <input type="text" placeholder={lang[search].placeHolder} className="bg-gray-800 text-white p-2 rounded-lg col-span-9" />
                <button type="submit" className="bg-blue-500 p-2 rounded-lg col-span-3">{lang[search].search}</button>
            </form>

        </div>

    )
}

export default GptSearchBar