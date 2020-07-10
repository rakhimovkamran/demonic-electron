import React from 'react'

export default props => (
 
        <>
            <select  onChange = { props.onChange } 
                className = 'select py-2 px-4 bg-gray-900 mb-4 text-gray-400 rounded-md' >
                { props.children }
            </select>

            <style jsx='true'>{`
                .select {

                    display: block;
                    -webkit-appearance:none;
                    -moz-appearance:none;
                    appearance:none;

                    display : inline;

                    margin-right : 10px;

                }
            `}</style>
        </>

)