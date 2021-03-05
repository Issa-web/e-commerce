import { createdSelector, createSelector } from 'reselect';
import Directory from '../../components/directory/directory.component';
import directoryReducer from './directory.reducer';


const selectDirectory = state => state.directory;

export const selectDirectorySections = createSelector(
    [selectDirectory],
    directory => directory.sections
)