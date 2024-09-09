import { supabase } from './supabaseClient';

export const TESTS_TABLE_NAME = 'TESTS';
export const USER_DONE_TEST_TABLE = 'user_done_test';

// set result & test info to user with supabase
export const upsertUserDoneTest = async (mainUrl, resultType) => {
  const { data } = await supabase.auth.getUser();
  if (data?.user) {
    // Check if the user and test combination already exists
    const { data: existingData, error: checkError } = await supabase
      .from(USER_DONE_TEST_TABLE)
      .select('*')
      .eq('user_id', data.user.id)
      .eq('test_query', mainUrl)
      .single();

    if (checkError && checkError.code !== 'PGRST116') {
      console.error('Error checking existing data:', checkError);
      return;
    }
    if (existingData) {
      // If exists, update the result_query
      await supabase
        .from(USER_DONE_TEST_TABLE)
        .update({ result_query: resultType })
        .eq('id', existingData.id)
        .eq('user_id', data.user.id)
        .eq('test_query', mainUrl);
    } else {
      // If not exists, create a new row
      const upsertData = {
        user_id: data.user.id,
        test_query: mainUrl,
        result_query: resultType,
      };
      await supabase.from(USER_DONE_TEST_TABLE).upsert(upsertData);
    }
  }
};

// a function to check if the mainUrl exists in the TESTS table
export const checkIfMainUrlExists = async (mainUrl) => {
  const { data, error } = await supabase
    .from(TESTS_TABLE_NAME)
    .select('*')
    .eq('mainUrl', mainUrl);
  if (error) {
    return false;
  }
  return data.length > 0;
};
// pxqkknopartnayikfmtg.supabase.co
// endpoint.ktestone.com
