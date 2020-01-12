<template>
  <div id="main-box" :class="size === 'small' ? 'small' : size === 'medium' ? 'medium' : 'big'">
    <div id="control-box">
      <div class="row" id="upper-row">
        <div class="counter">💣 {{mines}} </div>
        <div id="restart" @click="changeField(size)">
          <span id="status" :class="isLost ? 'far fa-frown' : isWon ? 'far fa-grin-tongue' : clicked ? 'far fa-surprise' : 'far fa-smile'"></span><br>
          Restart
        </div>
        <div class="counter">🕔 {{time}} </div>
      </div>
      <div class="row" id="bottom-row">
        <select id="difficulty" :class="size === 'small' ? 'difficulty-small' : ''" v-model="size" @change="changeField(size)">
          <option value="small" selected>Easy</option>
          <option value="medium">Intermediate</option>
          <option value="big">Advanced</option>
        </select>
        <div id="spacer"></div>
        <button id="show-records-button" @click="changeRecordsVisibility()">{{buttonText}}</button>
      </div>
    </div>
    <div id="field-box">
      <div id="records" :class="showRecords ? '' : 'hide'">
        <div id ="records-text">
          <div id="records-title">Records:</div><br>
          <div id="records-themselves">
            Easy: {{recordEasy}} <br><br>
            Intermediate: {{recordIntermediate}} <br><br>
            Advanced: {{recordAdvanced}} <br><br><br>
            <button id ="clear-records-button" @click="clearRecords()">Clear Records</button><br><br>
          </div>
          Tips: <br><br>
          <div class="text-space">
            The cells can be empty, contain mines or be numbered, with the number meaning how many mines are placed directly around that cell. They are initially hidden, your goal is to disclose all the empty and numbered cells without disclosing any of the mines. Click the left mouse button to disclose a hidden cell, the right mouse button to mark or unmark a hidden cell as containing a mine, or any mouse button to disclose all the hidden cells around a numbered cell, assuming you have marked the corresponding amount of mines directly around it.
          </div>        
        </div>
      </div>
      <Cell
        v-for="(item, index) in field"
        :content="item.content"
        :index="index"
        :hidden="item.hidden"
        :marked="item.marked"
        :questioned="item.questioned"
        :size="size"
        :lost="isLost"
        :key="index"
        @click.right.native.prevent
        @disclose-cell="discloseCell(index)"
        @mark-cell="markCell(index)"
      ></Cell>
    </div>
  </div>
</template>

<script>
import Cell from './components/Cell.vue'
import renewRecords from './assets/methods/renewRecords'
import changeRecordsVisibility from './assets/methods/changeRecordsVisibility'
import clearRecords from './assets/methods/clearRecords'
import timer from './assets/methods/timer'
import changeField from './assets/methods/changeField'
import checkIfWon from './assets/methods/checkIfWon'
import makeField from './assets/methods/makeField'
import calculateVicinity from './assets/methods/calculateVicinity'
import riskyBunch from './assets/methods/riskyBunch'
import discloseCell from './assets/methods/discloseCell'
import markCell from './assets/methods/markCell'

export default {
  name: 'app',
  components: {
    Cell
  },
  data: function() {
        return {field: {}, isLost: false, isWon: false, size: "small", mines: 10, clicked: false, time: 0, timeStop: true, showRecords: false, buttonText: "Records & Tips", recordEasy: "---", recordIntermediate: "---", recordAdvanced: "---"};
  },
  created() {
    this.makeField(this.size);
    this.timer();
  },
  beforeUpdate() {
    this.checkIfWon(this.size);
  },
  methods: {
    renewRecords,
    changeRecordsVisibility,
    clearRecords,
    timer,
    changeField,
    checkIfWon,
    makeField,
    calculateVicinity,
    riskyBunch,
    discloseCell,
    markCell
  }
}
</script>

<style>
  @import './assets/styles/style.css';
</style>
