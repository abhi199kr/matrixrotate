import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [arr,setarr]=useState([[1,2,3],[4,5,6],[7,8,9]])
  // const arr=[[1,2,3],[4,5,6],[7,8,9]]

console.log(arr)
  let R = 3;
let C = 3;
 

function rotate(m, n, mat)
{
    let row = 0, col = 0;
    let prev, curr;
     
    /*
    row - Starting row index
    m - ending row index
    col - starting column index
    n - ending column index
    i - iterator
    */
    while (row < m && col < n)
    {
        if (row + 1 == m || col + 1 == n)
            break;
   
        // Store the first element of next
        // row, this element will replace
        // first element of current row
        prev = mat[row + 1][col];
   
        // Move elements of first row
        // from the remaining rows
        for(let i = col; i < n; i++)
        {
            curr = mat[row][i];
            mat[row][i] = prev;
            prev = curr;
        }
        row++;
   
        // Move elements of last column
        // from the remaining columns
        for(let i = row; i < m; i++)
        {
            curr = mat[i][n - 1];
            mat[i][n - 1] = prev;
            prev = curr;
        }
        n--;
   
        // Move elements of last row
        // from the remaining rows
        if (row < m)
        {
            for(let i = n - 1; i >= col; i--)
            {
                curr = mat[m - 1][i];
                mat[m - 1][i] = prev;
                prev = curr;
            }
        }
        m--;
   
        // Move elements of first column
        // from the remaining rows
        if (col < n)
        {
            for(let i = m - 1; i >= row; i--)
            {
                curr = mat[i][col];
                mat[i][col] = prev;
                prev = curr;
            }
        }
        col++;
    }
    for(let i = 0; i < R; i++)
    {
        for(let j = 0; j < C; j++)
            console.log( mat[i][j] + " ");
             
        document.write("<br>");
    }
    console.log(mat)
    return mat
  }
//  rotate3,3,arr)
// const result=rotate(3,3,arr)
// rotate(3,3,arr)
const hell0=()=>{
  console.log("hello")
  // const result=rotate(3,3,arr)
  // console.log(result)
//  setarr(rotate(3,3,arr))
  // setarr([[1,2],[2,3]])
  const result=rotate(3,3,rotate(3,3,arr))
  console.log("Result",result)
  setarr(result)
}


  return (
    <div className="" >
    <p onClick={()=>hell0()}>hellow</p>
    {/* <button onClick={ rotatematrix(3,3,arr)}>a</button> */}
    
    {

      arr.map((ele)=>{
        return (
          
          <div className='d-flex tex' onClick={()=>hell0()}>
          {
          ele.map((e)=>{
            return (
              
              <p  className='btn'>{e}</p>
              
            )
          })
          }
          </div>
          
        )
      })
    }
     
    </div>
  );
}

export default App;
