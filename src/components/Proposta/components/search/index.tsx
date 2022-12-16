import AdvancedSearch from "./AdvancedSearch"
import { default as SearchComponent} from "./Search"

let Search: any = {}
Search = SearchComponent
Search.Form = SearchComponent
Search.Filter = AdvancedSearch

export default Search
