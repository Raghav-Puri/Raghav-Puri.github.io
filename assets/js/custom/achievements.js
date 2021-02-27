let options = {
    useEasing: true,
    useGrouping: true,
    duration: 4,
    separator: ',',
    decimal: '.',
};

let counterParent = document.getElementById('counter-container');
let children = counterParent.children;

function countStart() {
    for (let i = 0; i < children.length; i++) {
        let item = children[i].querySelector('.count-up');
        let countValue = item.getAttribute('data-value');

        let countUP = new countUp.CountUp(item, countValue, options);
        if (!countUP.error) {
            countUP.start();
        }
    }
}

$('#counter-container').waypoint(countStart, { triggerOnce: true, offset: '100%' });
