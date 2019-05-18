<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Satisfaction</th>
          <th>Nombre de réponses</th>
          <th>Points / {{totalPoints()}}</th>
          <th>Pourcentage</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Très satisfait</td>
          <td>{{ dataNumbers[0] }}</td>
          <td>{{ dataNumberPoints[0] }}</td>
          <td>{{ Math.round((dataNumbers[0] / totalAnswers) * 100) }}%</td>
        </tr>
        <tr>
          <td>Satisfait</td>
          <td>{{ dataNumbers[1] }}</td>
          <td>{{ dataNumberPoints[1] }}</td>
          <td>{{ Math.round((dataNumbers[1] / totalAnswers) * 100) }}%</td>
        </tr>
        <tr>
          <td>Assez satisfait</td>
          <td>{{ dataNumbers[2] }}</td>
          <td>{{ dataNumberPoints[2] }}</td>
          <td>{{ Math.round((dataNumbers[2] / totalAnswers) * 100) }}%</td>
        </tr>
        <tr>
          <td>Plutôt mécontent</td>
          <td>{{ dataNumbers[3] }}</td>
          <td>{{ dataNumberPoints[3] }}</td>
          <td>{{ Math.round((dataNumbers[3] / totalAnswers) * 100) }}%</td>
        </tr>
        <tr>
          <td>Très mécontent</td>
          <td>{{ dataNumbers[4] }}</td>
          <td>{{ dataNumberPoints[4] }}</td>
          <td>{{ Math.round((dataNumbers[4] / totalAnswers) * 100) }}%</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>{{ totalAnswers }}</td>
          <td>{{ calculScoreGenerale() }}</td>
          <td>{{ percentage() }}%</td>
        </tr>
      </tfoot>
    </table>
    <!-- <p>Points Reçus: {{ calculScoreGenerale() }}</p>
    <p>Points Max: {{ totalPoints() }}</p>
    <p>Pourcentage: {{ percentage() }}%</p>-->
  </div>
</template>

<script>
export default {
  props: ["dataNumbers", "dataNumberPoints", "totalAnswers"],
  methods: {
    calculScoreGenerale() {
      let pointTotaux =
        this.dataNumberPoints[0] +
        this.dataNumberPoints[1] +
        this.dataNumberPoints[2] +
        this.dataNumberPoints[3] +
        this.dataNumberPoints[4];
      return pointTotaux;
    },
    totalPoints() {
      return this.totalAnswers * 5;
    },
    percentage() {
      let totalPoints = this.totalAnswers * 5;
      let totalObtainedPoints =
        this.dataNumberPoints[0] +
        this.dataNumberPoints[1] +
        this.dataNumberPoints[2] +
        this.dataNumberPoints[3] +
        this.dataNumberPoints[4];
      let score = Math.round((totalObtainedPoints / totalPoints) * 100);
      return score;
    }
  }
};
</script>

<style>
thead {
  background: #ffb732;
}
td,
th {
  border: 1px solid black;
  padding: 10px;
}
table {
  margin-top: 25px;
  border-collapse: collapse;
}
tfoot {
  color: #c90000;
  font-weight: bold;
}
tr td:first-child {
  font-weight: bold;
  background: #ffe2ac;
}
tr td:not(:first-child) {
  text-align: center;
}
</style>
