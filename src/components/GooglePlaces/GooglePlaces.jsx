import React, {useState, useEffect} from 'react';
import SearchBar from "material-ui-search-bar";
import Script from "react-load-script";

export default function GooglePlaces() {

    const [url, setUrl] = useState(process.env.GOOGLE_PLACES_URL);
    const [city, setCity] = useState('');
    const [query, setQuery] = useState('');
    
    return (
        <>
            <Script url={this.state.url} onLoad={this.handleScriptLoad} />
            <SearchBar
            id="autocomplete"
            onRequestSearch={console.log('searching')}
            placeholder=""
            hintText="Search Establishment"
            value={this.state.query}
            style={{
                margin: "0 auto",
                maxWidth: 800
            }}
            onChange={() => this.handlePlaceSelect}
            />
        </>
    )
}
