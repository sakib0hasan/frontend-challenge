import React, {Component} from 'react';
import ReactPaginate from 'react-paginate';

class Pagination extends Component {
    constructor(props) {
        super(props);
    }
    handlePageClick = (data) => {
        this.props.onPageChange(data);
    };
    render() {

        return (
            <div className="container">
                <div className='flex flex-row space-around'>
                    <ReactPaginate previousLabel={"Previous"}
                                   disabledClassName={"disabled"}
                                   nextLabel={"Next"}
                                   breakLabel={<span>...</span>}
                                   breakClassName={"break-me"}
                                   pageCount={this.props.paginationLinks.lastPageNumber}
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
