<script setup>
import { ref, computed, reactive } from 'vue'
const logoSize = 'width:75px;';
const studentImgSize = 'width:120px;';
let courseNameItems = reactive([]);
const gradeSelection = ref([]);
const creditSelection = ref([]);
const changColor = ref(undefined)
// สูตรคำนวณเกรด สมมติมี 5 วิชา 
// เกรดที่ได้ A(4) A(4) B(3) A(4) A(4)
// หน่วยกิต 2 3 3 2 2
// (เกรดที่ได้ของวิชา1 x หน่วยกิตของวิชา1)+(เกรดที่ได้ของวิชา2 x หน่วยกิตของวิชา2)+...(เกรดที่ได้ของวิชา5 x หน่วยกิตของวิชา5)
// หารด้วยผลรวมของหน่วยกิจทั้งหมด
// (4x2)+(4x3)+(3x3)+(4x2)+(4x2) / (12)
// 45/12 = 3.75
const gradeCalculation = computed(() => {
    let total = undefined;
    let sumCredit = undefined;
    let sumTotal = undefined;
    if (gradeSelection.value.length > 0) {
        console.log(`มีการกรอกข้อมูลเกรดแล้ว, ${gradeSelection.value}`);
        total = gradeSelection.value.map(
            (grade, credit) => grade * creditSelection.value[credit]
        ).reduce((p, c) => p + c, 0);
        sumCredit = creditSelection.value.reduce((prev, curr) => prev + curr, 0);
        //มัน return ผลลัพธ์ของเกรด * หน่วยกิตออกมาเป็น object
    }
    //console.log(typeof (total));
    // let sumTotal = total.reduce((prev,curr) => prev+curr,0);
    console.log("ผลลัพธ์ของเกรด x หน่วนกิต = " + total);
    console.log("ผลรวมของหน่วยกิตทั้งหมด = " + sumCredit);
    return (total / sumCredit).toFixed(2)
})
const findSumCredit = computed(() => {
    let sumCredit = undefined;
    sumCredit = creditSelection.value.reduce((prev, curr) => prev + curr, 0);
    return sumCredit;
})
// test----------------
const addRow = ref(() => {
    courseNameItems.splice(courseNameItems.length, 0, '')
})

const resetRow = ref(() => {
    courseNameItems.length = 0;
    gradeSelection.value.length = 0;
    creditSelection.value.length = 0;
})
</script>
 
<template>
    <div>
        <!-- navbar goes here -->
        <nav class="bg-white shadow-lg rounded-lg">
            <div class="max-w-6xl mx-auto px-4">
                <div class="flex justify-between">
                    <div class="flex space-x-4">
                        <!-- logo -->
                        <div>
                            <a
                                href="#"
                                class="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
                            >
                                <img src="./assets/ABC.png" alt="LOGO" :style="logoSize" />
                                <span class="font-bold">WishYourGrade</span>
                            </a>
                        </div>
                    </div>

                    <!-- secondary nav -->
                    <div class="hidden md:flex items-center space-x-1">
                        <a href class="py-5 px-3">HOME</a>
                        <a href class="py-5 px-3">ABOUT US</a>
                        <a href class="py-5 px-3">CONTACT US</a>
                    </div>
                </div>
            </div>
        </nav>
        <!-- <div class="content-center"> -->
        <!-- <div>  
             <span>  </span>
        </div>-->
        <div id="#main-sector">
            <div class="container">
                <!-- <p>check in array</p> -->
                <div class="table">
                    <table class="table-fixed" style="margin: auto;">
                        <thead>
                            <tr v-if="courseNameItems.length > 0" class="text-4xl">
                                <th class="text-sm">NO.</th>
                                <th>Course</th>
                                <th>Grade</th>
                                <th>Credit</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="(item, index) in courseNameItems"
                                :key="index"
                                class="text-center text-3xl"
                            >
                                <td>{{ index + 1 }}</td>
                                <td>
                                    <input
                                        v-model="courseNameItems[index]"
                                        type="text"
                                        placeholder="e.g INT101"
                                        class="border rounded-xl"
                                    />
                                </td>
                                <td>
                                    <select
                                        v-model="gradeSelection[index]"
                                        class="border rounded-xl"
                                    >
                                        <option disabled>Please select your grade</option>
                                        <option value="4">A</option>
                                        <option value="3.5">B+</option>
                                        <option value="3">B</option>
                                        <option value="2.5">C+</option>
                                        <option value="2">C</option>
                                        <option value="1.5">D+</option>
                                        <option value="1">D</option>
                                        <option value="0">F</option>
                                    </select>
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        placeholder="Enter course's credit"
                                        min="0.5"
                                        step="0.5"
                                        v-model="creditSelection[index]"
                                        class="border rounded-xl"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="result">
                    <p v-if="courseNameItems.length > 0">
                        Semester GPA is :
                        <span
                            v-if="gradeCalculation < 2.49"
                            class="square text-6xl font-bol"
                            style="background-color: rgb(238, 78, 78);"
                        >{{ gradeCalculation }}</span>
                        <span
                            v-else-if="gradeCalculation < 3.49"
                            class="square text-6xl font-bol"
                            style="background-color: rgb(252, 171, 96);"
                        >{{ gradeCalculation }}</span>
                        <span
                            v-else-if="gradeCalculation <= 4"
                            class="square text-6xl font-bol"
                            style="background-color: rgb(96, 243, 96);"
                        >{{ gradeCalculation }}</span>
                        <span
                            v-else
                            class="square"
                            style="color: rgb(243, 109, 109);font-size: 15px;"
                        >The information is missing</span>
                    </p>
                    <br />
                    <button @click="addRow" class="BaddRow">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-12 w-12"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </button>

                    <button @click="resetRow" class="BresetRow">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-12 w-12"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </button>

                    <br />

                    <br />

                    <div id="gpa-desc">
                        <h1
                            class="font-bold text-3xl py-2 text-slate-800 text-left"
                        >What is a Grade Point Average (GPA)?</h1>
                        <div class="rounded-lg border border-slate-500 p-5 text-left">
                            <p>
                                <span
                                    class="font-bold text-slate-800"
                                >Your GPA (Grade Point Average) is a number that represents all of the letter grades you earned in either high school or college.</span> Condensing the grades on your transcript into one number gives colleges and businesses a quick overview of your academic success and helps you keep track of your educational goals.
                            </p>
                        </div>
                        <br />
                        <h1
                            class="font-bold text-3xl py-2 text-slate-800 text-left"
                        >How to Calculate GPA?</h1>
                        <div class="rounded-lg border border-slate-500 px-10 py-5 text-left">
                            <ol class="list-decimal">
                                <li>Multiply the point value of the letter grade by the number of credit hours.</li>
                                <li>Total the credit hours for the term.</li>
                                <li>Total the quality points for the term.</li>
                                <li>Divide the total quality points by the total credit hours.</li>
                                <li>The result is the G.P.A. for the term.</li>
                            </ol>
                            <hr />
                            <h1 class="font-bold text-2xl">EXAMPLE</h1>
                            <h2 class="font-medium">Term 1:</h2>
                            <ul>
                                <li>3 credits - B</li>
                                <li>3 credits - C</li>
                                <li>2 credits - A</li>
                                <li>3 credits - C+</li>
                                <li>4 credits - D+</li>
                            </ul>
                            <h2 class="font-medium">Term 1 Calculation:</h2>
                            <ul>
                                <li>B = 3.00 x 3 credit hours = 9.00 quality points</li>
                                <li>C = 2.00 x 3 credit hours = 6.00 quality points</li>
                                <li>A = 4.00 x 2 credit hours = 8.00 quality points</li>
                                <li>C+ = 2.50 x 3 credit hours = 7.50 quality points</li>
                                <li>D+ = 1.50 x 4 credit hours = 6.00 quality points</li>
                                <br />
                                <li>Add the number of quality points for term 1:</li>
                                <li>9.00 + 6.00 + 8.00 + 7.50 + 6.00= 36.5 quality points</li>
                                <br />
                                <li>Add the number of credit hours for term 1:</li>
                                <li>3 + 3 + 2 + 3 + 4 = 15 credit hours</li>
                                <br />
                                <li>Divide the total quality points by the total credit hours:</li>
                                <li>
                                    36.5 / 15 =
                                    <span class="font-bold">2.43 G.P.A.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- </div> -->
</template>
 
<style>
#gpa-desc {
    width: 55%;
    margin: auto;
}
.table {
    padding: 20px;
    margin: auto;
}
.result {
    margin: auto;
    padding: 20px;
    text-align: center;
}
.container {
    margin: auto;
    width: 50%;
    padding: 6em 10px 10px 10px;
}
body {
    font-size: 20px;
}
.square {
    display: inline-block;
    /* background-color: rgb(73, 209, 73);  */
    width: auto;
    height: auto;
    padding: 8px;
    border-radius: 12px;
    font-family: "Audiowide", sans-serif;
    color: white;
    font-size: 25px;
    font-weight: bold;
}
.BaddRow {
    width: auto;
    height: auto;
    padding: 8px;
    margin-right: 2em;
    border-radius: 12px;
    font-family: "Audiowide", sans-serif;
    color: rgba(0, 0, 0, 0.3);
    font-size: 25px;
    font-weight: bold;
    background-color: rgb(101, 194, 248);
    transition: all 0.3s ease;
}
.BaddRow:hover {
    color: rgb(255, 255, 255);
    background-color: rgb(52, 175, 247);
}
.BresetRow {
    width: auto;
    height: auto;
    padding: 8px;
    margin-right: 2em;
    border-radius: 12px;
    font-family: "Audiowide", sans-serif;
    color: rgb(0, 0, 0, 0.3);
    font-size: 25px;
    font-weight: bold;
    background-color: rgb(206, 206, 206);
    transition: all 0.3s ease;
}
.BresetRow:hover {
    color: rgb(255, 255, 255);
    background-color: rgb(104, 104, 104);
}
</style>