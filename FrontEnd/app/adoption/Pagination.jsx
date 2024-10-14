// app/adoption/Pagination.jsx
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="flex justify-center mt-4">
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index}
                    onClick={() => onPageChange(index + 1)}
                    className={`mx-1 px-3 py-1 rounded-md ${currentPage === index + 1 ? 'bg-bgButton text-white' : 'bg-gray-200'}`}
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
