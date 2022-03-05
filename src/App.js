import React from 'react'

// import Header from './components/Header';
// import Counter from './components/Counter';
// import Form from './components/Form';
// import UseEf from './components/UseEf';
// import Seconds from './components/Seconds';
import Search from './components/Search'



class App extends React.Component {
    render() {
        return (
            <div className='ui grid container center aligned'>
                <div className='column eight wide'>
                    <Search  />
                </div>
            </div>
        )
    };
}

export default App;