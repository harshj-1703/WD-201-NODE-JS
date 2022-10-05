const todoList = () => {
  all = []
  const add = (todoItem) => {
    all.push(todoItem)
  }
  const markAsComplete = (index) => {
    all[index].completed = true
  }

  const overdue = () => {
    // Write the date check condition here and return the array of overdue items accordingly.
    // FILL YOUR CODE HERE
    var i;
    var overdue = [];
    for (i in all) {
      if (all[i].dueDate < today) {
        overdue.push(all[i]);
      }
    }
    return overdue;
  }

  const dueToday = () => {
    // Write the date check condition here and return the array of todo items that are due today accordingly.
    // FILL YOUR CODE HERE
    var i;
    var dueToday = [];
    for (i in all) {
      if (all[i].dueDate === today) {
        dueToday.push(all[i]);
      }
    }
    return dueToday;
  }

  const dueLater = () => {
    // Write the date check condition here and return the array of todo items that are due later accordingly.
    // FILL YOUR CODE HERE
    var i;
    var dueLater = [];
    for (i in all) {
      if (all[i].dueDate > today) {
        dueLater.push(all[i]);
      }
    }
    return dueLater;
  }

  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string as per the format given above.
    // FILL YOUR CODE HERE
    var i;
    var displayList = []
    for (i=0;i<list.length;i++) {
      if (list[i].completed === false) {
        if (list[i].dueDate === today) {
          displayList.push(`[ ] ${list[i].title}`)
        }
        else {
          displayList.push(`[ ] ${list[i].title} ${list[i].dueDate}`)
        }
      }
      else {
        if (list[i].dueDate === today) {
          displayList.push(`[x] ${list[i].title}`)
        }
        else {
          displayList.push(`[x] ${list[i].title} ${list[i].dueDate}`)
        }
      }
    }
    
    return displayList.join("\n");
  }
  return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
}