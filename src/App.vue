<script setup>
import { ref, computed, reactive } from 'vue'
const logoSize = 'width:242px;';
// const course = [
//     { classID: 1, grade: '', credit: 0 },
//     { classID: 2, grade: '', credit: 0 },
//     { classID: 3, grade: '', credit: 0 },
//     { classID: 4, grade: '', credit: 0 },
//     { classID: 5, grade: '', credit: 0 }

// ]
const courseNameItems = reactive([
    { classID: '1', courseName: 'สอนนอน', grade: '4', credit: 0 },
    { classID: '2', courseName: 'สอนนอน', grade: '4', credit: 0 },
    { classID: '3', courseName: 'สอนนอน', grade: '4', credit: 0 },
    { classID: '4', courseName: 'สอนนอน', grade: '4', credit: 0 },
    { classID: '5', courseName: 'สอนนอน', grade: '4', credit: 0 }

]);

//function
// const doSomething = () =>{
//     for()
// }


</script>
 
<template>
    <div>
        <nav class="container flex justify-around bg-white shadow-md">
            <div class="flex items-center">
                <img src="./assets/ABC WishYourGrade LOGO.png" alt="LOGO" :style="logoSize" />
            </div>
            <!-- left header section -->
            <div class="items-center hidden space-x-8 lg:flex">
                <a href>Home</a>
                <a href>About Us</a>
                <a href>Contact Us</a>
            </div>
            <!-- right header section -->
        </nav>
        <!-- <div class="content-center"> -->
        <!-- <div>  
             <span>  </span>
        </div>-->
        <div class="grid-container">
            <div
                class="grid grid-item grid-cols-3 gap-4"
                v-for="(item, index) in courseNameItems"
                :key="index"
            >
                <input type="text" class="border" placeholder="e.g INT101 Fundamental Programming" />

                <select v-model="gradeSelection" class="border bg-white">
                    <option value>Please select your grade</option>
                    <option value="A">A</option>
                    <option value="B+">B+</option>
                    <option value="B">B</option>
                    <option value="C+">C+</option>
                    <option value="C">C</option>
                    <option value="D+">D+</option>
                    <option value="D">D</option>
                    <option value="F">F</option>
                </select>
                <input type="number" class="border" placeholder="Enter course's credit" />
            </div>
            <div class="pborder">
                <p>check in array</p>

                <table class="table-fixed" style="width:50%">
                    <thead>
                        <tr>
                            <th>courseID</th>
                            <th>Course</th>
                            <th>Grade</th>
                            <th>Credit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- <tr v-for="course in courseNameItem" :key="course.courseID">
                            <td>{{ course.courseID }}</td>
                            <td>{{ course.courseName }}</td>
                            <td>{{ course.grade }}</td>
                            <td>{{ course.credit }}</td> 
                            
                            //ใช้เพื่อแสดงข้อมูลจาก array
                        -->

                        <tr
                            v-for="(item, index) in courseNameItems"
                            :key="index"
                            class="text-center"
                        >
                            <td>{{ index + 1 }}</td>
                            <td>
                                <input
                                    type="text"
                                    class="border"
                                    placeholder="e.g INT101 Fundamental Programming"
                                />
                            </td>
                            <td>
                                <select v-model="gradeSelection" class="border bg-white">
                                    <option value>Please select your grade</option>
                                    <option value="A">A</option>
                                    <option value="B+">B+</option>
                                    <option value="B">B</option>
                                    <option value="C+">C+</option>
                                    <option value="C">C</option>
                                    <option value="D+">D+</option>
                                    <option value="D">D</option>
                                    <option value="F">F</option>
                                </select>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    class="border"
                                    placeholder="Enter course's credit"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <!-- </div> -->
</template>
 
<style>
.pborder {
    border: 2px solid rgb(19, 18, 18);
    border-radius: 9px;
    padding: 3px;
}
</style>

