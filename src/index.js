module.exports = function toReadable(number) {
    if (number === 0) {
        return 'zero'
    } else if (number < 0 || number > 1000) {
        return 'type number from 0 to 999'
    };

    let stringifiedNumber = String(number);
    let hundredNumber = '';
    let tensNumber = '';
    let result = '';

    if (stringifiedNumber.length === 3) {
        hundredNumber = stringifiedNumber[0];
        tensNumber = stringifiedNumber.slice(1)
    } else {
        tensNumber = stringifiedNumber;
    };

    switch (hundredNumber) {
        case '1':
            result += 'one hundred';
            break;
        case '2':
            result += 'two hundred';
            break;
        case '3':
            result += 'three hundred';
            break;
        case '4':
            result += 'four hundred';
            break;
        case '5':
            result += 'five hundred';
            break;
        case '6':
            result += 'six hundred';
            break;
        case '7':
            result += 'seven hundred';
            break;
        case '8':
            result += 'eight hundred';
            break;
        case '9':
            result += 'nine hundred';
            break;
        default: '';
    };

    if (tensNumber < 20) {
        switch (Number(tensNumber)) {
            case 1:
                result += ' one';
                break;
            case 2:
                result += ' two';
                break;
            case 3:
                result += ' three';
                break;
            case 4:
                result += ' four';
                break;
            case 5:
                result += ' five';
                break;
            case 6:
                result += ' six';
                break;
            case 7:
                result += ' seven';
                break;
            case 8:
                result += ' eight';
                break;
            case 9:
                result += ' nine';
                break;
            case 10:
                result += ' ten';
                break;
            case 11:
                result += ' eleven';
                break;
            case 12:
                result += ' twelve';
                break;
            case 13:
                result += ' thirteen';
                break;
            case 14:
                result += ' fourteen';
                break;
            case 15:
                result += ' fifteen';
                break;
            case 16:
                result += ' sixteen';
                break;
            case 17:
                result += ' seventeen';
                break;
            case 18:
                result += ' eighteen';
                break;
            case 19:
                result += ' nineteen';
                break;
            default: ''

        }
    } else {
        switch (tensNumber[0]) {
            case '2':
                result += ' twenty';
                break;
            case '3':
                result += ' thirty';
                break;
            case '4':
                result += ' forty';
                break;
            case '5':
                result += ' fifty';
                break;
            case '6':
                result += ' sixty';
                break;
            case '7':
                result += ' seventy';
                break;
            case '8':
                result += ' eighty';
                break;
            case '9':
                result += ' ninety';
                break;
        }

        switch (tensNumber[1]) {
            case '1':
                result += ' one';
                break;
            case '2':
                result += ' two';
                break;
            case '3':
                result += ' three';
                break;
            case '4':
                result += ' four';
                break;
            case '5':
                result += ' five';
                break;
            case '6':
                result += ' six';
                break;
            case '7':
                result += ' seven';
                break;
            case '8':
                result += ' eight';
                break;
            case '9':
                result += ' nine';
                break;
        }
    }
    return result.trim();
};