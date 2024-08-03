// Introduction to aggregation Pipelines

// 🔒

// Q1 find active users
// .find({isActive:true})

// db.getCollection('Users').aggregate([
//     {
//         $match: {
//           isActive:true
//         }
//     },
//     {
//          $count: 'activeUsers'
//     }
// ])

// Q2 Find average age of all users

// db.getCollection('Users').find({},{age:1})
// db.getCollection('Users').aggregate([
//     {
//         $group: {
//             _id: null,
//             avgAge: {
//                 $avg: '$age'
//             }
//         }
//     }
// ])

//Q3 List the top 5 most common favouraite fruits among users

// db.getCollection("Users").aggregate([
//     {
//       $group: {
//         _id: "$favoriteFruit",
//         countOfFruits: {
//           $sum: 1,
//         },
//       },
//     },
//     {
//       $sort: {
//         countOfFruits: -1,
//       },
//     },
//     {
//       $limit: 1,
//     },
//   ]);

//Q5. which country has the highest amount of registered users

// db.getCollection("Users").aggregate([

// ])