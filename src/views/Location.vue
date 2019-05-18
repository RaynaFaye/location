<template>
  <div>
    <h1>Location de Vehicule Leclerc</h1>
    <section class="location">
      <div class="location-section">
        <h2>1. Appréciation Générale</h2>
        <div class="pie-and-table">
          <div class="waiting-load" v-if="!loaded"></div>
          <app-pie-charts
            :dataSet="dataSetOne"
            :dataSetPercentage="dataSetOnePercentage"
            chart-id="pie-chart-appreciation"
            v-if="loaded"
            :class="canvasSize"
          ></app-pie-charts>
          <app-table-satisfaction
            :dataNumbers="dataSetOne"
            :dataNumberPoints="dataSetOnePoints"
            :totalAnswers="numberAnswersOne"
          ></app-table-satisfaction>
        </div>
        <div class="recommendation-section">
          <p class="recommendation-score-text">
            Score de Recommendation: {{recommendationPoints/10}} sur 10 soit {{
            Math.round((recommendationPoints/100) *100) }}%
          </p>
          <div class="arrow">
            <p class="zero">0</p>
            <p class="ten">10</p>
            <div class="score">
              <p>{{recommendationPoints / 10 }}</p>
            </div>
            <div class="arrow-end"></div>
          </div>
        </div>
      </div>
      <div class="location-section">
        <h2>2. Location du véhicule</h2>
        <div class="pie-and-table">
          <div class="waiting-load" v-if="!loaded"></div>
          <app-pie-charts
            :dataSet="dataSetTwo"
            :dataSetPercentage="dataSetTwoPercentage"
            chart-id="pie-chart-rental"
            v-if="loaded"
            :class="canvasSize"
          ></app-pie-charts>
          <app-table-satisfaction
            :dataNumbers="dataSetTwo"
            :dataNumberPoints="dataSetTwoPoints"
            :totalAnswers="numberAnswersTwo"
          ></app-table-satisfaction>
        </div>
      </div>
      <div class="location-section">
        <h2>3. Le Véhicule</h2>
        <div class="pie-and-table">
          <div class="waiting-load" v-if="!loaded"></div>
          <app-pie-charts
            :dataSet="dataSetThree"
            :dataSetPercentage="dataSetThreePercentage"
            chart-id="pie-chart-vehicule"
            v-if="loaded"
            :class="canvasSize"
          ></app-pie-charts>
          <app-table-satisfaction
            :dataNumbers="dataSetThree"
            :dataNumberPoints="dataSetThreePoints"
            :totalAnswers="numberAnswersThree"
          ></app-table-satisfaction>
        </div>
      </div>
      <div class="location-section">
        <h2>4. Restitution du Véhicule</h2>
        <div class="pie-and-table">
          <div class="waiting-load" v-if="!loaded"></div>
          <app-pie-charts
            :dataSet="dataSetFour"
            :dataSetPercentage="dataSetFourPercentage"
            chart-id="pie-chart-return"
            v-if="loaded"
            :class="canvasSize"
          ></app-pie-charts>
          <app-table-satisfaction
            :dataNumbers="dataSetFour"
            :dataNumberPoints="dataSetFourPoints"
            :totalAnswers="numberAnswersFour"
          ></app-table-satisfaction>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import PieCharts from "../components/PieCharts.vue";
import TableSatisfaction from "../components/TableSatisfaction.vue";
export default {
  data() {
    return {
      canvasSize: "canvasSize",
      loaded: false,
      piechart: "piechart",
      piecharttwo: "piecharttwo",
      piechartthree: "piechartthree",
      piechartfour: "piechartfour",
      recommendationPoints: 0,
      numberAnswersOne: 0,
      numberAnswersTwo: 0,
      numberAnswersThree: 0,
      numberAnswersFour: 0,
      verySatisfied: 0,
      satisfied: 0,
      quiteSatisfied: 0,
      ratherUnhappy: 0,
      veryUnhappy: 0,
      verySatisfiedTwo: 0,
      satisfiedTwo: 0,
      quiteSatisfiedTwo: 0,
      ratherUnhappyTwo: 0,
      veryUnhappyTwo: 0,
      verySatisfiedThree: 0,
      satisfiedThree: 0,
      quiteSatisfiedThree: 0,
      ratherUnhappyThree: 0,
      veryUnhappyThree: 0,
      verySatisfiedFour: 0,
      satisfiedFour: 0,
      quiteSatisfiedFour: 0,
      ratherUnhappyFour: 0,
      veryUnhappyFour: 0,
      verySatisfiedScore: 0,
      satisfiedScore: 0,
      quiteSatisfiedScore: 0,
      ratherUnhappyScore: 0,
      veryUnhappyScore: 0,
      verySatisfiedTwoScore: 0,
      satisfiedTwoScore: 0,
      quiteSatisfiedTwoScore: 0,
      ratherUnhappyTwoScore: 0,
      veryUnhappyTwoScore: 0,
      verySatisfiedThreeScore: 0,
      satisfiedThreeScore: 0,
      quiteSatisfiedThreeScore: 0,
      ratherUnhappyThreeScore: 0,
      veryUnhappyThreeScore: 0,
      verySatisfiedFourScore: 0,
      satisfiedFourScore: 0,
      quiteSatisfiedFourScore: 0,
      ratherUnhappyFourScore: 0,
      veryUnhappyFourScore: 0,
      dataSetOne: [],
      dataSetTwo: [],
      dataSetThree: [],
      dataSetFour: [],
      dataSetOnePoints: [],
      dataSetTwoPoints: [],
      dataSetThreePoints: [],
      dataSetFourPoints: [],
      dataSetOnePercentage: [],
      dataSetTwoPercentage: [],
      dataSetThreePercentage: [],
      dataSetFourPercentage: []
    };
  },
  components: {
    appPieCharts: PieCharts,
    appTableSatisfaction: TableSatisfaction
  },
  created() {
    axios
      .get("https://locationleclerc.serenalombardo.fr/fetchdata.php")
      //.get("http://localhost/locationquestionnaire/fetchdata.php")
      .then(response => {
        for (let i = 0; i < response.data.length; i++) {
          this.optionChoice(response.data[i].globalSatisfaction);
          this.optionNumberChoice(response.data[i].recommendation);
          this.optionChoiceTwo(response.data[i].rentalWait);
          this.optionChoiceTwo(response.data[i].rentalCourtesy);
          this.optionChoiceTwo(response.data[i].rentalHelpfulness);
          this.optionChoiceTwo(response.data[i].rentalProfessionalism);
          this.optionChoiceTwo(response.data[i].rentalSpeed);
          this.optionChoiceTwo(response.data[i].rentalExplanation);
          this.optionChoiceThree(response.data[i].vehiculeClean);
          this.optionChoiceThree(response.data[i].vehiculeSatisfaction);
          this.optionChoiceThree(response.data[i].vehiculeBrand);
          this.optionChoiceFour(response.data[i].returnParking);
          this.optionChoiceFour(response.data[i].returnTime);
          this.optionChoiceFour(response.data[i].returnQuality);
          this.optionChoiceFour(response.data[i].returnSpeed);
          this.optionChoiceFour(response.data[i].returnPrice);
        }
      })
      .then(() => {
        this.dataSetOne.push(
          this.verySatisfied,
          this.satisfied,
          this.quiteSatisfied,
          this.ratherUnhappy,
          this.veryUnhappy
        );
        this.dataSetTwo.push(
          this.verySatisfiedTwo,
          this.satisfiedTwo,
          this.quiteSatisfiedTwo,
          this.ratherUnhappyTwo,
          this.veryUnhappyTwo
        );
        this.dataSetThree.push(
          this.verySatisfiedThree,
          this.satisfiedThree,
          this.quiteSatisfiedThree,
          this.ratherUnhappyThree,
          this.veryUnhappyThree
        );
        this.dataSetFour.push(
          this.verySatisfiedFour,
          this.satisfiedFour,
          this.quiteSatisfiedFour,
          this.ratherUnhappyFour,
          this.veryUnhappyFour
        );
      })
      .then(() => {
        this.dataSetOnePoints.push(
          this.verySatisfiedScore,
          this.satisfiedScore,
          this.quiteSatisfiedScore,
          this.ratherUnhappyScore,
          this.veryUnhappyScore
        );
        this.dataSetTwoPoints.push(
          this.verySatisfiedTwoScore,
          this.satisfiedTwoScore,
          this.quiteSatisfiedTwoScore,
          this.ratherUnhappyTwoScore,
          this.veryUnhappyTwoScore
        );
        this.dataSetThreePoints.push(
          this.verySatisfiedThreeScore,
          this.satisfiedThreeScore,
          this.quiteSatisfiedThreeScore,
          this.ratherUnhappyThreeScore,
          this.veryUnhappyThreeScore
        );
        this.dataSetFourPoints.push(
          this.verySatisfiedFourScore,
          this.satisfiedFourScore,
          this.quiteSatisfiedFourScore,
          this.ratherUnhappyFourScore,
          this.veryUnhappyFourScore
        );
      })
      .then(() => {
        this.changeDataSet(
          this.dataSetOnePercentage,
          this.dataSetOne,
          this.numberAnswersOne
        );
        this.changeDataSet(
          this.dataSetTwoPercentage,
          this.dataSetTwo,
          this.numberAnswersTwo
        );
        this.changeDataSet(
          this.dataSetThreePercentage,
          this.dataSetThree,
          this.numberAnswersThree
        );
        this.changeDataSet(
          this.dataSetFourPercentage,
          this.dataSetFour,
          this.numberAnswersFour
        );
      })
      .then(() => {
        this.loaded = true;
      });
  },
  methods: {
    optionNumberChoice(option) {
      switch (option) {
        case "10":
          this.recommendationPoints += 10;
          break;
        case "9":
          this.recommendationPoints += 9;
          break;
        case "8":
          this.recommendationPoints += 8;
          break;
        case "7":
          this.recommendationPoints += 7;
          break;
        case "6":
          this.recommendationPoints += 6;
          break;
        case "5":
          this.recommendationPoints += 5;
          break;
        case "4":
          this.recommendationPoints += 4;
          break;
        case "3":
          this.recommendationPoints += 3;
          break;
        case "2":
          this.recommendationPoints += 2;
          break;
        case "1":
          this.recommendationPoints += 1;
          break;
        case "0":
          this.recommendationPoints += 0;
          break;
      }
    },
    optionChoice(option) {
      switch (option) {
        case "very-satisfied":
          this.verySatisfied++;
          this.numberAnswersOne++;
          this.verySatisfiedScore += 5;
          break;
        case "satisfied":
          this.satisfied++;
          this.numberAnswersOne++;
          this.satisfiedScore += 4;
          break;
        case "quite-satisfied":
          this.quiteSatisfied++;
          this.numberAnswersOne++;
          this.quiteSatisfiedScore += 3;
          break;
        case "rather-unhappy":
          this.ratherUnhappy++;
          this.numberAnswersOne++;
          this.ratherUnhappyScore += 2;
          break;
        case "very-unhappy":
          this.veryUnhappy++;
          this.numberAnswersOne++;
          this.veryUnhappyScore += 1;
          break;
      }
    },
    optionChoiceTwo(option) {
      switch (option) {
        case "very-satisfied":
          this.verySatisfiedTwo++;
          this.numberAnswersTwo++;
          this.verySatisfiedTwoScore += 5;
          break;
        case "satisfied":
          this.satisfiedTwo++;
          this.numberAnswersTwo++;
          this.satisfiedTwoScore += 4;
          break;
        case "quite-satisfied":
          this.quiteSatisfiedTwo++;
          this.numberAnswersTwo++;
          this.quiteSatisfiedTwoScore += 3;
          break;
        case "rather-unhappy":
          this.ratherUnhappyTwo++;
          this.numberAnswersTwo++;
          this.ratherUnhappyTwoScore += 2;
          break;
        case "very-unhappy":
          this.veryUnhappyTwo++;
          this.numberAnswersTwo++;
          this.veryUnhappyTwoScore += 1;
          break;
      }
    },
    optionChoiceThree(option) {
      switch (option) {
        case "very-satisfied":
          this.verySatisfiedThree++;
          this.numberAnswersThree++;
          this.verySatisfiedThreeScore += 5;
          break;
        case "satisfied":
          this.satisfiedThree++;
          this.numberAnswersThree++;
          this.satisfiedThreeScore += 4;
          break;
        case "quite-satisfied":
          this.quiteSatisfiedThree++;
          this.numberAnswersThree++;
          this.quiteSatisfiedThreeScore += 3;
          break;
        case "rather-unhappy":
          this.ratherUnhappyThree++;
          this.numberAnswersThree++;
          this.ratherUnhappyThreeScore += 2;
          break;
        case "very-unhappy":
          this.veryUnhappyThree++;
          this.numberAnswersThree++;
          this.veryUnhappyThreeScore += 1;
          break;
      }
    },
    optionChoiceFour(option) {
      switch (option) {
        case "very-satisfied":
          this.verySatisfiedFour++;
          this.numberAnswersFour++;
          this.verySatisfiedFourScore += 5;
          break;
        case "satisfied":
          this.satisfiedFour++;
          this.numberAnswersFour++;
          this.satisfiedFourScore += 4;
          break;
        case "quite-satisfied":
          this.quiteSatisfiedFour++;
          this.numberAnswersFour++;
          this.quiteSatisfiedFourScore += 3;
          break;
        case "rather-unhappy":
          this.ratherUnhappyFour++;
          this.numberAnswersFour++;
          this.ratherUnhappyFourScore += 2;
          break;
        case "very-unhappy":
          this.veryUnhappyFour++;
          this.numberAnswersFour++;
          this.veryUnhappyFourScore += 1;
          break;
      }
    },
    changeDataSet(array, dataSet, totalAnswers) {
      for (let i = 0; i < dataSet.length; i++) {
        array.push(Math.round((dataSet[i] / totalAnswers) * 100));
      }
    }
  }
};
</script>

<style>
h1 {
  text-align: center;
}
h2 {
  background: orange;
  border-radius: 5px;
  padding: 10px;
}
.waiting-load {
  width: 500px;
  height: 500px;
  border: 1px solid orange;
  border-radius: 5px;
}
.canvasSize {
  width: 500px;
  border: 1px solid orange;
  border-radius: 5px;
}
.location {
  display: flex;
  flex-direction: column;
}
.location-section {
  margin: 25px 35px;
  display: flex;
  flex-direction: column;
}
.pie-and-table {
  margin-top: 25px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.recommendation-section {
  margin-top: 50px;
  margin-bottom: 50px;
  align-self: center;
  width: 50%;
}
.recommendation-score-text {
  font-size: 18px;
  font-weight: bold;
  text-align: center;
}
.arrow {
  border-radius: 5px;
  margin-top: 50px;
  height: 50px;
  background: linear-gradient(to right, #ff0000, #daa600, #43ff00);
  position: relative;
}
.arrow-end {
  border-radius: 5px;
  height: 100px;
  width: 50px;
  position: absolute;
  right: -25px;
  top: -25px;
  background: #43ff00;
  -webkit-clip-path: polygon(100% 50%, 0 0, 0 100%);
  clip-path: polygon(100% 50%, 0 0, 0 100%);
}
.score {
  font-weight: bold;
  border: 1px solid black;
  border-radius: 5px;
  background: linear-gradient(to right, #51da02, #43ff00);
  padding: 10px;
  position: absolute;
  right: 75px;
  top: -10px;
}
.zero,
.ten {
  font-weight: bold;
  position: absolute;
  top: -45px;
}
.ten {
  right: -10px;
}
@media all and (max-width: 992px) {
  .location-section {
    margin: 25px 0px;
    display: flex;
    flex-direction: column;
  }
  .pie-and-table {
    flex-direction: column;
  }

  .recommendation-section {
    width: 85%;
  }
}
</style>
