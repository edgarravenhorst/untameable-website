// import { sql } from '@vercel/postgres';

// export const BlogApprover: React.FC<any> = async (props) => {
//   const { rows } =
//     await sql`SELECT likes, dislikes from BLOGS where id=${props.blogId}`;

//   return (
//     <div>
//       {rows.map((row) => (
//         <div key={row.id}>
//           {row.id} - {row.quantity}
//         </div>
//       ))}
//     </div>
//   );
// };
