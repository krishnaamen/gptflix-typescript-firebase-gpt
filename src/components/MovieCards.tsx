import { POSTER_PATH } from "../utils/constant"

interface MovieCardsProps {
    title: string;
    poster_path: string;
}

const MovieCards: React.FC<MovieCardsProps> = ({ title, poster_path }) => {
    if (!poster_path) return null;
    return (
        <div className="w-48 mr-4 flex scroll-m-1">
            <img src={`${POSTER_PATH}${poster_path}`} alt={title} />
        </div>
    )
}

export default MovieCards