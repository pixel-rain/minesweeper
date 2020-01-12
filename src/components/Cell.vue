<template>
  <div 
    class="cell" 
    :style="style" 
    @click.left="$emit('disclose-cell')"
    @click.right="$emit('mark-cell')"
  >
    {{ this.val }}
  </div>
</template>

<script>
import colors from '../assets/colors'

export default {
  name: 'Cell',
  props: ["content", "index", "hidden", "marked", "questioned", "size", "lost"],
  data: function() {
    return {val: ""};
  },
  beforeUpdate() {
    this.val = (this.marked && this.content !== "💣" && this.lost) ? "╳" : this.marked ? "🚩" : (this.lost && this.content === "💣") ? "💣" : (this.questioned && this.hidden) ? "❓" : this.hidden ? "" : this.content;
  },
  computed: {
    style() {
      const backgroundColor = (this.lost && this.hidden) ? "hsl(0, 100%, 85%)" : (this.lost && !this.hidden) ? "hsl(0, 100%, 95%)" : this.hidden ? "silver" : "whitesmoke";
      const color = this.marked ? "red" : (this.questioned && this.hidden) ? "dimgrey" : ([1, 2, 3, 4, 5, 6, 7, 8].includes(this.content) ? colors[this.content] : 'black'); //the last black is for the mines
      const limit = this.size === "small" ? 9 : this.size === "medium" ? 16 : 30;
      if (this.index > 0 && (this.index + 1) % limit === 0) {
        return {color, backgroundColor};   
      }
      else {
        return {borderRight: "1px solid black", color, backgroundColor}; 
      }
    }
  }
}
</script>
