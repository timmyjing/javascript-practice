// As part of an Instacart beta testing group, Sara is trying out a brand new feature that automatically estimates the combined cost of the items in her handwritten shopping list. Her list contains both items and their prices. All Sara has to do is snap a photo of her list with the Instacart app, and she gets a quick estimate of what everything will cost.

// Sara asked for your help, so it is up to you to devise an algorithm that calculates the cost after the image is converted into plain text. All you need to do is extract all numbers from the given string items and sum them up.

function shoppingList(items) {
    const cost = items.match(/\d+\.?\d{0,2}/g);
    
    if (!cost) return 0;
    
    return cost.reduce( (a, c) => a + (c - 0), 0);
}
