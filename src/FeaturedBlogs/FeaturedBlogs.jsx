// import React from 'react';

// import { useLoaderData } from 'react-router-dom';

// const FeaturedBlogs = () => {


//     const blogData = useLoaderData();

    
//     const sortedBlogs = blogData.sort((a, b) => {
//         const wordCountA = a.longDescription.split(' ').length;
//         const wordCountB = b.longDescription.split(' ').length;
//         return wordCountB - wordCountA;
//     });

    
//     const topBlogs = sortedBlogs.slice(0, 10);
//     return (
//         <div className="container mx-auto mt-10">
//         <h1 className="text-3xl font-bold mb-4">Top 10 Featured Blogs</h1>
//         <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//                 <tr>
//                     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
//                     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Blog Title</th>
//                     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Blog Owner</th>
//                     <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Profile Picture</th>
//                 </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//                 {topBlogs.map((blog, index) => (
//                     <tr key={index}>
//                         <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
//                         <td className="px-6 py-4 whitespace-nowrap">{blog.title}</td>
//                         <td className="px-6 py-4 whitespace-nowrap">{blog.userName}</td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                             <img src={blog.userImage || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} alt="Profile" className="h-10 w-10 rounded-full" />
//                         </td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     </div>
//     );
// };

// export default FeaturedBlogs;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useTable } from 'react-table';

const FeaturedBlogs = () => {
    const blogData = useLoaderData();

    const sortedBlogs = blogData.sort((a, b) => {
        const wordCountA = a.longDescription.split(' ').length;
        const wordCountB = b.longDescription.split(' ').length;
        return wordCountB - wordCountA;
    });

    const topBlogs = sortedBlogs.slice(0, 10);

  
    const columns = React.useMemo(
        () => [
            { Header: '#', accessor: 'index' },
            { Header: 'Blog Title', accessor: 'title' },
            { Header: 'Blog Owner', accessor: 'userName' },
            { Header: 'Profile Picture', accessor: 'userImage', Cell: ({ value }) => <img src={value || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} alt="Profile" className="h-10 w-10 rounded-full" /> }
        ],
        []
    );

    
    const data = React.useMemo(
        () =>
            topBlogs.map((blog, index) => ({
                index: index + 1,
                title: blog.title,
                userName: blog.userName,
                userImage: blog.userImage
            })),
        [topBlogs]
    );

  
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({ columns, data });

    return (
        <div className="container mx-auto mt-10">
            <h1 className="text-3xl font-bold mb-4">Top 10 Featured Blogs</h1>
            <table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
                    {rows.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => (
                                    <td {...cell.getCellProps()} className="px-6 py-4 whitespace-nowrap">
                                        {cell.render('Cell')}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default FeaturedBlogs;
