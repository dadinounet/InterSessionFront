import React, {Component} from 'react';
import HistoriqueItem from "./HistoriqueItem";

class RightSidebar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            baseTest: [],
            filtredTest: [],
        this.filterList = this.filterList.bind(this);
    }

    filterList (event) {
        let updatedList = this.state.baseTest;

        updatedList = updatedList.filter(function(item){
            return item.title.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1;
        });
        this.setState({filtredTest: updatedList});
    }

    render() {
        return (
            <div id="rightSidebar" className="right">
                <table className="table">
                    <tbody>
                    <tr className="input-field">
                        <td className="search col-md-9">
                            <div className="inner-addon right-addon">
                                <input className="col-md-12" type="search" placeholder="Search" onChange={this.filterList}/>
                                <i className="material-icons">search</i>
                            </div>
                        </td>
                        <th valign="middle" colSpan="2" className="text-center">
                            <i className="material-icons">refresh</i>
                        </th>
                    </tr>
                    <tr>
                        <td colSpan="2" className="type"><i className="material-icons">person</i> Current user</td>
                    </tr>

                    {this.state.filtredTest.map((item, index) => {
                        return <HistoriqueItem key={index} test={item}/>;
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default RightSidebar;
