import Required from "./Required"
import UnsupportedValidator from "./UnsupportedValidator"
import MinimumLength from './MinimumLength'
import MaximumLength from './MaximumLength'
import RangeValidator from './Range'
import Numeric from './Numeric'

export default {
    "required": Required,
    "minimum": MinimumLength,
    "maximum": MaximumLength,
    "range": RangeValidator,
    "numeric": Numeric,
    UnsupportedValidator
}
