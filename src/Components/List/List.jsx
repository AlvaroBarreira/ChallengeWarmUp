
import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListItem from '../ListItem.jsx/ListItem';
import { getPosts } from '../../Redux/Actions/actionsPosts';
import FormAdd from '../FormAdd/FormAdd';

function List() {

    const dispatch = useDispatch()
  
    const state = useSelector((state) => state)
  
    useEffect(() => {

        dispatch(getPosts())
     
      }, [])

    return (
          
        <div className="container" style={{background: "white", margin: "25px auto", padding: "10px"}}>

            <div className="title-box">
                <h1 className="text-center">Json Placeholder Users</h1>
            </div>

            <FormAdd />
            <table className="table table-bordered grocery-crud-table table-hover">
                <thead>
                    <tr>
                        <th className="col-lg-8 col-md-10 col-sm-10">Title</th>
                        <th className="col-lg-4 col-md-2 col-sm-2">Actions</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        state.Reducer.posts.map((post) => {
                            return <ListItem id={post.id} title={post.title} />
                        })
                    }
                 
                </tbody>
            </table>

        </div>
    )
}

export default List
