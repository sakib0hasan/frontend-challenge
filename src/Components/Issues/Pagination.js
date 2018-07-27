import React, {Component} from 'react';
import ReactPaginate from 'react-paginate';

class Pagination extends Component {
    constructor(props) {
        super(props);

        this.state = {
            offset: 0
        }
    }
    handlePageClick = (data) => {
        let selected = data.selected;
        let offset = Math.ceil(selected * 30);

        this.setState({offset: offset}, () => {
            //this.loadCommentsFromServer();
            console.log(offset);
        });
    };
    render() {

        return (
            <div className="container">
                <div className='flex flex-row space-around'>
                    <ReactPaginate previousLabel={"previous"}
                                   nextLabel={"next"}
                                   breakLabel={<a href="">...</a>}
                                   breakClassName={"break-me"}
                                   pageCount={this.state.pageCount}
                                   marginPagesDisplayed={2}
                                   pageRangeDisplayed={5}
                                   onPageChange={this.handlePageClick}
                                   containerClassName={"pagination"}
                                   subContainerClassName={"pages pagination"}
                                   activeClassName={"active"} />
                </div>
            </div>
        );
    }
}

export default Pagination;
