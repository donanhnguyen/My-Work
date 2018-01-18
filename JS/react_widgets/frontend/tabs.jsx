import React from 'react';


class Tabs extends React.Component {

    constructor (props) {
        super(props);
        this.state = {selectedTabIndex: 0};



    }


   getFuckingIndex (element) {
        const fuckingIndex = Array.prototype.indexOf.call(element.parentNode.children, element);
        return fuckingIndex;
    }

    clickaroo (event) {
        event.preventDefault();
        const currentTar = event.currentTarget;
        this.setState({selectedTabIndex: this.getFuckingIndex(currentTar) });
    }


    render () {

        let currentTab = this.props.panels[this.state.selectedTabIndex];

        let headers = this.props.panels.map((tab, index) => {
            let paneTitle = tab.title;
            let paneContent = tab.content;
       

        return (
            <li key={index}
           onClick={this.clickaroo.bind(this)}>
               
                {paneTitle}
             </li>
        )


        });

        return (
           <div className="tabs-fuck">
                <ul>
                    {headers}

                    <article>
                        {currentTab.content}
                    </article>
                </ul>
            </div>
        );
        
       




    }





}

export default Tabs;