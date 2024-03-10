import { Category } from '../controllers/categories'
import fetchData from '../utils/FetchData'

jest.mock('../utils/FetchData')

describe('Category', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Get all data', async () => {
    const mockedData = { data: {} };
    (fetchData.get as jest.Mock).mockResolvedValue(mockedData);

    const data = await Category.getData();

    expect(fetchData.get).toHaveBeenCalledWith('get_all_cats');
    expect(data).toEqual(mockedData);
  });

  it('should fetch properties for a given category', async () => {
    const mockedData = { data: 'mocked data' };
    (fetchData.get as jest.Mock).mockResolvedValue(mockedData);

    const properties = await Category.getProperties('category_id');

    expect(fetchData.get).toHaveBeenCalledWith('properties?cat=category_id');
    expect(properties).toEqual(mockedData);
  });

  it('should fetch options child for a given id', async () => {
    const mockedData = { data: {} };
    (fetchData.get as jest.Mock).mockResolvedValue(mockedData);

    const optionsChild = await Category.getOptionsChild('some_id');

    expect(fetchData.get).toHaveBeenCalledWith('get-options-child/some_id');
    expect(optionsChild).toEqual(mockedData);
  });

});

